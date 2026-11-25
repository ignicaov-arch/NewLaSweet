import { describe, it, expect } from 'vitest';
import {
  buildOrderInquiryMessage,
  buildWhatsAppUrl,
  cleanUserText,
  sanitizeUrl
} from '../src/domain/whatsapp';

describe('Domínio WhatsApp e Sanitização La Sweet', () => {
  it('remove tags e caracteres de controle preservando acentos PT-BR e lida com não-string', () => {
    const cleaned = cleanUserText('  Croissant <script>alert(1)</script> de Morango \n\t ');
    expect(cleaned).not.toContain('<');
    expect(cleaned).not.toContain('>');
    expect(cleaned).toContain('Croissant');
    expect(cleaned).toContain('Morango');
    expect(cleanUserText(null)).toBe('');
    expect(cleanUserText(12345)).toBe('');
  });

  it('bloqueia esquemas inseguros, entradas vazias, URLs inválidas e hosts não autorizados', () => {
    expect(sanitizeUrl('')).toBe('/');
    expect(sanitizeUrl('not a valid url')).toBe('/');
    expect(sanitizeUrl('http://wa.me/553791114767')).toBe('/');
    expect(sanitizeUrl('javascript:alert(1)')).toBe('/');
    expect(sanitizeUrl('data:text/html,<h1>x</h1>')).toBe('/');
    expect(sanitizeUrl('//evil.example.com')).toBe('/');
    expect(sanitizeUrl('https://evil.example.com/phish')).toBe('/');
    expect(sanitizeUrl('https://www.instagram.com/_lasweet/')).toBe(
      'https://www.instagram.com/_lasweet/'
    );
    expect(sanitizeUrl('/linkbio')).toBe('/linkbio');
    expect(sanitizeUrl('#cardapio')).toBe('#cardapio');
  });

  it('gera link wa.me oficial com número da La Sweet, fallback seguro e mensagem padrão', () => {
    const url = buildWhatsAppUrl('Quero croissant de Nutella');
    expect(url).toBe('https://wa.me/553791114767?text=Quero%20croissant%20de%20Nutella');
    expect(buildWhatsAppUrl('Oi', '123')).toContain('https://wa.me/553791114767');
    expect(buildWhatsAppUrl('Oi', '')).toContain('https://wa.me/553791114767');
    expect(buildWhatsAppUrl('')).toContain('https://wa.me/553791114767?text=');
    expect(buildWhatsAppUrl('<>')).toContain('https://wa.me/553791114767?text=');
  });

  it('monta mensagem estruturada de pedido ignorando entradas vazias', () => {
    const msg = buildOrderInquiryMessage({
      occasion: 'Presente especial',
      desiredDate: 'Sábado às 15h',
      itemChoice: 'Caixa rosa com bombons',
      notes: 'Cartão com dedicatória'
    });
    expect(msg).toContain('La Sweet');
    expect(msg).toContain('Presente especial');
    expect(msg).toContain('Caixa rosa com bombons');
    expect(msg).toContain('Cartão com dedicatória');

    const fallback = buildOrderInquiryMessage({
      occasion: '',
      desiredDate: '',
      itemChoice: ''
    });
    expect(fallback).toContain('Pedido especial');
    expect(fallback).toContain('para hoje ou esta semana');
  });
});
