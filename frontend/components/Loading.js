import React, { Component } from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
    margin: auto;
`;

const Loading = () => (
    <StyledLoading>
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            class="lds-rolling"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                ng-attr-stroke="white"
                ng-attr-stroke-width="10px"
                ng-attr-r="10px"
                stroke="#efefef"
                stroke-width="20"
                r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138"
                transform="rotate(257.514 50 50)"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="linear"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    </StyledLoading>
);

export default Loading;
