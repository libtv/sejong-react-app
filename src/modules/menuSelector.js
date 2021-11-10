//* action type *//
const DASHBOARD_SELECT = "menuSelector/DASHBOARD";
const IBIZ_SELECT = "menuSelector/IBIZ";
const VNS_SELECT = "menuSelector/VNS";
const DESTINATION_SELECT = "menuSelector/DESTINATION";
const SCHEDUAL_SELECT = "menuSelector/SCHEDUAL";
const MENT_SELECT = "menuSelector/MENT";
const ACCOUNT_SELECT = "menuSelector/ACCOUNT";

//* create action *//
export function dashboard() {
    return {
        type: DASHBOARD_SELECT,
    };
}

export function ibiz() {
    return {
        type: IBIZ_SELECT,
    };
}

export function vns() {
    return {
        type: VNS_SELECT,
    };
}

export function destination() {
    return {
        type: DESTINATION_SELECT,
    };
}
export function schedual() {
    return {
        type: SCHEDUAL_SELECT,
    };
}
export function ment() {
    return {
        type: MENT_SELECT,
    };
}

export function account() {
    return {
        type: ACCOUNT_SELECT,
    };
}

//* initialize const variable *//
const initializeState = {
    select: "dashboard",
};

//* reducer *//
export default function menuSelector(state = initializeState, action) {
    switch (action.type) {
        case DASHBOARD_SELECT:
            return {
                select: "dashboard",
            };
        case IBIZ_SELECT:
            return {
                select: "ibiz",
            };
        case VNS_SELECT:
            return {
                select: "vns",
            };
        case DESTINATION_SELECT:
            return {
                select: "destination",
            };
        case SCHEDUAL_SELECT:
            return {
                select: "schedual",
            };
        case MENT_SELECT:
            return {
                select: "ment",
            };
        case ACCOUNT_SELECT:
            return {
                select: "account",
            };
        default:
            return state;
    }
}
