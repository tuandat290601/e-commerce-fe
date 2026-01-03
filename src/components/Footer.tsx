import { Map, Newspaper, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full py-4 px-16 border-t ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col">
          <Link href={"/"} className="flex mb-2">
            <Map className="mr-2" />
            Store Location
          </Link>
          <p className="text-xs mb-1">
            <span className="font-bold">STANDARD STORE</span>: 377 SƯ VẠN HẠNH,
            PHƯỜNG HÒA HƯNG (QUẬN 10), TP.HCM
          </p>
          <p className="text-xs">
            <span className="font-bold">STANDARD STORE</span>: 193 QUANG TRUNG,
            PHƯỜNG GÒ VẤP (QUẬN GÒ VẤP), TP.HCM
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <Phone className="mr-2" />
            Support
          </div>
          <p className="text-xs mb-1">
            <span className="font-bold">HOTLINE</span>: +84 794 794 678
          </p>
          <p className="text-xs mb-1">
            <span className="font-bold">CSKH</span>: CSKH@OWLBRAND.VN
          </p>
          <p className="text-xs">
            <span className="font-bold">LIÊN HỆ HỢP TÁC</span>: PR@OWLBRAND.VN
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <Newspaper className="mr-2" />
            Policy
          </div>
          <Link href={"/"} className="text-xs mb-1">
            CHÍNH SÁCH ĐỔI HÀNG
          </Link>
          <Link href={"/"} className="text-xs mb-1">
            SHIPPING & ORDER
          </Link>
          <Link href={"/"} className="text-xs mb-1">
            TRACKING ORDER
          </Link>
          <Link href={"/"} className="text-xs mb-1">
            OWL. MEMBERSHIP
          </Link>
          <Link href={"/"} className="text-xs">
            HƯỚNG DẪN SẢN PHẨM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
