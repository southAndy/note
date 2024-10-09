import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import GiscusComment from "../../components/Giscus/index"


export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <GiscusComment/>
    </>
  );
}
