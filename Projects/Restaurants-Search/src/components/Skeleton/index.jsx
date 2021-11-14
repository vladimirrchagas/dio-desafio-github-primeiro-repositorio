import React from "react";
import styled, { keyframes } from "styled-components";

const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const Skeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${({ width }) => width}
    height: ${(height) => height}
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

const LoadingSkeleton = ({ width, height}) => {
    return (
        <Skeleton width={width} height={height} />
    )
}

export default LoadingSkeleton;
