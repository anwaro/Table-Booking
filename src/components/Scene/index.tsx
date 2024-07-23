import { ReactNode } from "react";

import s from "./style.module.scss";

type SceneProps = {
    children: ReactNode;
};

export function Scene({ children }: SceneProps) {
    return <div className={s.scene}>{children}</div>;
}
