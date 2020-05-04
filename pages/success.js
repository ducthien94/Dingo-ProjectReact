import Layout from "../components/Layout";
import firebase from "../firebase";
import Reservation from "../components/reservation_form";
import Link from "next/link";
const Success = () => {
  return (
    <Layout>
      <img
        className="check_icon"
        src="https://firebasestorage.googleapis.com/v0/b/dingo-2314.appspot.com/o/tenor.gif?alt=media&token=144d7e3e-5d70-4ec7-8e7d-d666b5023a9c"
      ></img>
      <h2 className="text-center">Cảm Ơn Quý Khách Đã Đặt Bàn</h2>
      <p className="text-center">
        Chỉ sau khi nhận được tin nhắn SMS, Email xác nhận, hoặc cuộc gọi tư vấn
        từ bộ phận chăm sóc khách hàng thì đăng kí của bạn mới được coi là hợp
        lệ. <br></br> Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!
      </p>
      <div className="text-center mb-5">
        <Link href="menu">
                <button
          className="button rounded-0 primary-bg text-white w-24 btn_4 "
          type="submit"
        >
          Khám Phá Menu
        </button>
        </Link>

      </div>
    </Layout>
  );
};

export default Success;
