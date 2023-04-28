import React from 'react';

// @ts-ignore
export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className={`hamburger`}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
        <div className="burger burger4" />
      </div>

      <style jsx>{`
        .hamburger {
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          gap: 4px;
          flex-flow: column nowrap;
          z-index: 50;
        }
        .burger {
          width: ${isOpen ? '30px' : '24px'};
          height: 2px;
          border-radius: 10px;
          background-color: orange;
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
        .burger1 {
          transform: ${isOpen ? 'rotate(40deg)' : 'rotate(0)'};
        }
        .burger2 {
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          opacity: ${isOpen ? 0 : 1};
        }
        .burger4 {
          transform: ${isOpen ? 'rotate(-40deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  );
}
