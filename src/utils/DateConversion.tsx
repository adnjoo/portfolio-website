import React from 'react';
import { parseISO, format } from 'date-fns';

export default function DateConversion({ dateString }: { dateString: any }): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
