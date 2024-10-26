
import { AchivmentsApi } from '@/apis/HomepageApi';
import AchievementsSection from '@/Components/ClientSideComponents/HomePageComponents/AchievementsComponent';


const AchievementsSectionWrapper = async () => {
    const response = await AchivmentsApi();

    if (response?.hasOwnProperty("error")) {
        console.log("error in AchivmentsApi API");
    }

    return (
        <>
            <AchievementsSection response={response} />
        </>
    );
};

export default AchievementsSectionWrapper;
