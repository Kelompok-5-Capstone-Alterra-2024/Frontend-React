import PaginationDetailUserVolunteer from "./PaginationDetailUserVolunteer";
import TabelDetailUserVolunteer from "./TabelDetailUserVolunteer";

const DetailUserVolunteer = () => {
    return (
      <div className="p-6 shadow-lg rounded-lg">
        <TabelDetailUserVolunteer/>
        <PaginationDetailUserVolunteer/>
      </div>
    );
  };
  
  export default DetailUserVolunteer;