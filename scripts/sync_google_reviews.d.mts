export interface SyncReviewRecord {
  reviewId: string;
  authorName: string;
  authorUri: string;
  authorPhoto: string;
  guideBadge: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
}

export function selectLatestFiveStarWindow(
  incomingReviews?: ReadonlyArray<Record<string, unknown>>,
  existingPool?: ReadonlyArray<Record<string, unknown>>,
  options?: { fetchLimit?: number; displayLimit?: number }
): {
  recentPool: SyncReviewRecord[];
  fiveStarLatest: SyncReviewRecord[];
};

export function verifyExactBusinessMatch(
  place?: Record<string, unknown>,
  expected?: { domain?: string; phoneDigits?: string; city?: string; nameToken?: string }
): boolean;
