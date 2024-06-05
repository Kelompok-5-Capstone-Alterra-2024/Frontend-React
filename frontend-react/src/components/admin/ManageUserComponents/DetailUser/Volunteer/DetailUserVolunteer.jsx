import PaginationDetailUserVolunteer from "./PaginationDetailUserVolunteer";
import TabelDetailUserVolunteer from "./TabelDetailUserVolunteer";

const DetailUserVolunteer = () => {
    return (
      <div className="pt-5 rounded-lg">
        <TabelDetailUserVolunteer/>
        <PaginationDetailUserVolunteer/>
      </div>
    );
  };
  
  export default DetailUserVolunteer;