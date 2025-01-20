export interface InfobarsSingle {
  variant: "single",
  imageURL: string,
  destination: string,
  date: string,
  reservationCode: string
}

export type InfobarsProps = InfobarsSingle