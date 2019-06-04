import React from "react";
import styled from 'styled-components'


const SearchBox = ({   }) => {
  return (
    <SearchBoxWrapper>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>
        <input
          type="text"
          style={{ padding: 2 }}
          placeholder="نام, برند ,کالا..."
          className="form-control col-md-3"
        />
      </div>
    </SearchBoxWrapper>
  );
};

export default SearchBox;



const SearchBoxWrapper = styled.div`
   font-family:'IRANSansMobile' ;
   align-items:'right' ;
`