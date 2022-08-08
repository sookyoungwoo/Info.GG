import AimList from "../../database/aim_data.json";

export const Select_aimlist = (id) => {
    for (let p of AimList.data) {
        if (p.id === parseInt(id)) return p;
    }

    return -1;
}
