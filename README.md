# React Hook Pagniation

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 프로젝트 실행하기

```
$ npm install
$ npm run start
```

`localhost:3000`에서 실행됩니다.

## Custom Hook 으로 Pagniation 로직 분리하기

```jsx
import React, { useState } from "react";

function usePagination(data, itemsPerPage = 10) {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    }

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;

        return data.slice(begin, end);
    }

    return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
```

`usePagination`에서 `useState`로 상태 변수를 만들고, `setCurrentPage`를 이용해 다양한 상황에 따라 상태를 변경할 수 있는 함수를 만든 후, 해당 함수들을 Export 합니다.

> **Ref** : https://dev.to/sebastianguenther/react-creating-a-custom-hook-for-pagination-jni
