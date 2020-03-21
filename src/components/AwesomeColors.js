import React from 'react';
import styled from 'styled-components';

export default function AwesomeColors({ colors }) {
  function copyToClipboard(elementId) {
    const aux = document.createElement('input');
    aux.setAttribute('value', document.getElementById(elementId).innerHTML.toUpperCase());
    document.body.appendChild(aux);
    aux.select();
    const result = document.execCommand('copy');
    if (result) {
      alert('Copied');
    }
    document.body.removeChild(aux);
  }

  return (
    <div style={panel}>
      <h3>Awesome Colors</h3>
      <div id="color-list">
        {colors.map((color) => {
          const id = color.slice(1);

          return (
            <div key={id} style={mainStyle}>
              <div style={{ ...colorDiv, backgroundColor: color }} onClick={() => copyToClipboard(id)} />
              <ColorName id={id}>{color}</ColorName>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ColorName = styled.div`
  background-color: white;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  text-transform: uppercase;
`;

const colorDiv = { height: 200, width: 200 };

const panel = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#efefef',
  alignItems: 'flex-start',
  margin: 100,
  padding: 40
};

const mainStyle = {
  flexDirection: 'column',
  border: '5px solid white'
};
