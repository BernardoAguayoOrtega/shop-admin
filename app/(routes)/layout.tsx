import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl p-20 bg-white shadow-md rounded-lg flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;