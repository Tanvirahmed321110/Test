// const allNavItems = document.querySelectorAll('.my-sidebar .sidebar-nav-item');

// if (allNavItems) {
//     allNavItems.forEach(item => {
//         item.addEventListener('click', function () {
//             const isActive = item.classList.contains('active');

//             allNavItems.forEach(each => {
//                 each.classList.remove('active');
//                 const icon = each.querySelector('.right-arrow');
//                 if (icon) icon.classList.remove('active');
//             });

//             item.classList.toggle('active');
//             const icon = item.querySelector('.right-arrow');
//             if (icon) icon.classList.toggle('active');
//         });
//     });
// }




// Sidebar nav dropdown open and close, and active class add
const allNavItems = document.querySelectorAll('.my-sidebar .sidebar-nav-item');

if (allNavItems) {
    allNavItems.forEach(item => {
        item.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            allNavItems.forEach(each => {
                each.classList.remove('active');
                const icon = each.querySelector('.right-arrow');
                const dropdown = each.nextElementSibling;

                if (icon) icon.classList.remove('active');
                if (dropdown && dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active')
                }
            });

            item.classList.toggle('active', !isActive);
            const icon = item.querySelector('.right-arrow');
            const dropdown = item.nextElementSibling;

            if (icon) icon.classList.toggle('active', !isActive);
            if (dropdown) {
                dropdown.classList.toggle('active')
            }
            if (isActive) {
                dropdown.classList.remove('active')
            }
        });
    });
}



// menu Btn
const menuBtn = document.getElementById('menu-btn')
const sidebar = document.querySelector('.my-sidebar')
const mainBody = document.querySelector('.main-body')
const myHeader = document.querySelector('.my-header')

menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active')
    mainBody.classList.toggle('active')
    myHeader.classList.toggle('active')
})
