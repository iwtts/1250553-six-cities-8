type Review = {
  comment: string,
  date: string,
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
