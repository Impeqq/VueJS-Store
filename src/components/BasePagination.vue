<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        :class="{ 'pagination__link--disabled': page === 1 }"
        aria-label="Предыдущая страница"
        @click.prevent="isFirstPage && paginate(page - 1)"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        href="#"
        @click.prevent="paginate(pageNumber)"
        class="pagination__link"
        :class="{ 'pagination__link--current': pageNumber === page }"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        :class="{ 'pagination__link--disabled': page === pages }"
        aria-label="Следующая страница"
        @click.prevent="isLastPage && paginate(page + 1)"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BasePagination",
  model: {
    prop: "page",
    event: "paginate",
  },
  props: ["page", "count", "perPage"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    isFirstPage() {
      return this.page !== 1;
    },
    isLastPage() {
      return this.page !== this.pages;
    },
  },
  methods: {
    paginate(page) {
      this.$emit("paginate", page);
    },
  },
};
</script>

<style>
</style>