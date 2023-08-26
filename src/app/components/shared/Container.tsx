import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="tablet:max-w-tablet desktop:max-w-desktop mx-auto">
            {children}
        </div>
    );
};

export default Container;
