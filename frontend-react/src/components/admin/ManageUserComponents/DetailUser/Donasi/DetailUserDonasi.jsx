import PaginationDetailUserDonasi from "./PaginationDetailUserDonasi";
import TabelDetailUserDonasi from "./TabelDetailUserDonasi";

const DetailUserDonasi = () => {
    return (
      <div className="p-6 shadow-lg rounded-lg">
        <TabelDetailUserDonasi/>
        <PaginationDetailUserDonasi/>
      </div>
    );
  };
  
  export default DetailUserDonasi;
  