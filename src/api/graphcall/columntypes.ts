// Define a generic column interface
export interface IColumn {
  name: string;
  type: keyof IColumnTypes;
}

// Define a map of column types
export interface IColumnTypes {
  boolean?: any;
  calculated?: any;
  choice?: any;
  contentApprovalStatus?: any;
  currency?: MicrosoftGraph.CurrencyColumn;
  dateTime?: MicrosoftGraph.DateTimeColumn;
  geolocation?: MicrosoftGraph.GeolocationColumn;
  hyperlinkOrPicture?: MicrosoftGraph.HyperlinkOrPictureColumn;
  lookup?: MicrosoftGraph.LookupColumn;
  number?: MicrosoftGraph.NumberColumn;
  personOrGroup?: MicrosoftGraph.PersonOrGroupColumn;
  term?: MicrosoftGraph.TermColumn;
  text?: MicrosoftGraph.TextColumn;
  thumbnail?: MicrosoftGraph.ThumbnailColumn;
}

// Use intersection types to define column types
export type CreateColumn<T extends keyof IColumnTypes> = IColumn & {
  [P in T]: any;
};

// Example usage
const textColumn: CreateColumn<"text"> = {
  name: "ExampleTextColumn",
  type: "text",
  text: {}, // column definition
};

const numberColumn: CreateColumn<"number"> = {
  name: "ExampleNumberColumn",
  type: "number",
  number: {}, // column definition
};
