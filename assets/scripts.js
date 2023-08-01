function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    const categoryButtons = document.querySelectorAll('.filters-container .category button');
    const like = document.querySelectorAll('.single-entry .like-product.like');
    const liked = document.querySelectorAll('.single-entry .like-product.liked');

    categoryButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const subCategoriesPanel = this.nextElementSibling;
            this.classList.toggle('active');

            if (subCategoriesPanel.style.height) {
                subCategoriesPanel.style.height = null;
            } else {
                subCategoriesPanel.style.height = subCategoriesPanel.scrollHeight + 16 + 'px';
            }
        });
    });

    like.forEach(function (likeBtn) {
       likeBtn.addEventListener('click', function (event) {
           event.preventDefault();

           this.classList.add('hide');
           this.parentNode.querySelector('.liked').classList.add('show');
       });
    });

    liked.forEach(function (likedBtn) {
        likedBtn.addEventListener('click', function (event) {
            event.preventDefault();

            this.classList.remove('show');
            this.parentNode.querySelector('.like').classList.remove('hide');
        });
    });
});
