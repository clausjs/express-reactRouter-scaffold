import React from 'react';

const TestPage: React.FC = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is <i>NOT</i> the homepage. You've either navigated to `/test` or you've used React Router's routes to get here!</p>
        </div>
    )
}

export default TestPage;