import GLOBAL_STRINGS from "@/app/constants/strings/global-strings";
import { StringsE } from "@/app/types/string-type";
import Link from "next/link";
import { FC } from "react";

const HeadNavbar: FC = () => {
    return (
        <ul className="flex gap-x-3">
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.mobileTblet]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.accessories]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.smartwatch]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.headphone]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.laptop]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.pc]}</Link>
            </li>
            <li>
                <Link href={"#"}>
                    {GLOBAL_STRINGS[StringsE.officeMachines]}
                </Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.gaming]}</Link>
            </li>
            <li>
                <Link href={"#"}>{GLOBAL_STRINGS[StringsE.media]}</Link>
            </li>
            <li>
                <Link href={"#"}>
                    {GLOBAL_STRINGS[StringsE.homeAppliances]}
                </Link>
            </li>
        </ul>
    );
};

export default HeadNavbar;
