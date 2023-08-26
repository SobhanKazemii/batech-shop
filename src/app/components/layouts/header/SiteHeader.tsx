import { FC } from "react";
import Container from "../../shared/Container";
import HeadNavbar from "./HeadNavbar";
import Image from "next/image";
import Link from "next/link";

const SiteHeader: FC = () => {
    return (
        <Container>
            <div>
                <div>
                    <div className="w-20 h-20 flex relative">
                        <Image
                            src={"/images/logos/logo.png"}
                            alt="123"
                            fill
                            className="flex bg-black object-cover"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="search"
                            placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید."
                        />
                    </div>
                </div>
                <div>
                    <Link href={"/auth"}>
                        <div>
                            <strong>ورود</strong>
                            <strong>ثبت‌نام</strong>
                        </div>
                    </Link>
                    <Link href={"/basket"}>سبد</Link>
                </div>
            </div>
            <HeadNavbar />
        </Container>
    );
};

export default SiteHeader;
