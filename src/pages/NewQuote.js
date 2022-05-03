import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const addQuoteHandler = quoteData => {
  console.log(quoteData)
}

function NewQuote() {
  return <QuoteForm onAddQuote={addQuoteHandler}/>;
}

export default NewQuote;
