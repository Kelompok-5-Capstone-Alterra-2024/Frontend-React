import PaginationDetailUserDonasi from "./PaginationDetailUserDonasi";
import TabelDetailUserDonasi from "./TabelDetailUserDonasi";

const DetailUserDonasi = () => {
    return (
      <div className="pt-5 rounded-lg">
        <TabelDetailUserDonasi/>
        <PaginationDetailUserDonasi/>
      </div>
    );
  };
  
  export default DetailUserDonasi;
  