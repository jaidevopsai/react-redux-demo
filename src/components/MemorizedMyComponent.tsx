import React from 'react';

interface MyComponentProps {
    name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
    console.log('Rendering:', name);

    return <div>React.memo - Hello , {name} MemorizedMyComponent !</div>;
}

const MemorizedMyComponent = React.memo(MyComponent);



export default MemorizedMyComponent ;
