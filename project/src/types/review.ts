type Review = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  },
}

type Comment = {
  comment: string,
  rating: string,
}

export type { Review, Comment };
