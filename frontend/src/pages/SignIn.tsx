import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export const SignIn = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">  
        <div>
            <Auth type="signin" />
        </div>
        <div className="invisible lg:visible">
            <Quote />
        </div>
    </div>
}