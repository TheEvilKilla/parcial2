import React, { useEffect, useState } from 'react';
import * as Element from 'react-bootstrap';

const Band = (props) => {
    return (
      <tr>
        <th scope="row">{props.band.id}</th>
        <a href={`/${props.band.id}`} onClick={props.handleClick}><td>{props.band.name}</td></a>
        <td>{props.band.country}</td>
        <td>{props.band.genre}</td>     
        <td>{props.band.foundation_year}</td>   
      </tr>
    );
  };  export default Band;
  