import { PrimaryBtn } from "../components/PrimaryBtn"
import { GoogleG } from "../components/GoogleG"

export const AboutUs = () => {

    const handleBtnAccount = () => {
        console.log('clicked')
    }

    return <div>
        <div className="w-[90%] xl:w-[1100px] mx-auto my-[40px]">
            <PrimaryBtn btnRadius="5px" btnTextColor="white" btnBorder="black" btnBg="black" btnType="submit" btnText="Google pay" btnAction={handleBtnAccount} icon={<GoogleG w="20px" h="20px" fill="white" />} />
        </div>
    </div>
}