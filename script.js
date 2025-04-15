const danh_sach_thanh_vien = ["Khoa", "Kiệt", "Lộc"];

document.getElementById("actionButton").addEventListener("click", function()
{
    const chuoi_ten = danh_sach_thanh_vien.map(ten=> "  - " + ten).join("\n");
    alert("Các thành viên trong nhóm gồm:\n" + chuoi_ten);
}
);