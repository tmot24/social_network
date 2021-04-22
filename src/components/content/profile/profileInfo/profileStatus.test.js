import {create} from "react-test-renderer";
import {ProfileStatus} from "./profileStatus";

describe("ProfileStatus component", () => {
    test("status should be in state", () => {
        const component = create(<ProfileStatus status={"react go!"}/>);
        const root = component.root;
        expect(root.props.status).toBe("react go!");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="react go!"/>);
        const root = component.root;
        expect(() => {
            root.findByType("span");
        }).not.toBeNull();
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="react go!"/>);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });
});