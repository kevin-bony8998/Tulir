import { OrbitControls } from "@react-three/drei"
import { Plant } from "../Plant/Plant"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={4} />
            <OrbitControls />
            <Plant />
        </>
    )
};