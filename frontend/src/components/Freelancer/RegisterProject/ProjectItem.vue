<template>
    <div class="object-item accordion mb-3" :id="`accordion${index}`">
        <div class="accordion-item">
            <h2 class="accordion-header" :id="`heading${index}`">
                <button
                    class="accordion-button collapsed p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index}`"
                    aria-expanded="false"
                    :aria-controls="`collapse${index}`"
                >
                    <img
                        :src="`${project.urlAvatar}`"
                        alt=""
                        class="me-2 rounded-circle"
                        style="width: 35px; height: 35px"
                    />
                    <span>{{ project.name }}</span>
                </button>
            </h2>
            <div
                :id="`collapse${index}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index}`"
                :data-bs-parent="`#accordion${index}`"
            >
                <div class="accordion-body row">
                    <div class="col-12">
                        <strong>Email: </strong> {{ project.email }}
                    </div>
                    <div class="col-12">
                        <strong>Địa chỉ: </strong> {{ project.address }}
                    </div>
                    <div class="col-12 d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            class="btn btn-outline-warning p-2"
                            
                            style="font-size: 15px; background-color: #2C542F; border:none; color: white;"
                            @click="showDetail(project)"
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: ["project", "index"],
    methods: {
        showDetail(project) {
            const headerDetail = document.querySelector(".title-detail .label");
            headerDetail.innerText = "Thông tin chi tiết";
            this.$store.commit("SHOW_PROJECT");
            this.$store.commit("SET_PROJECT_DETAIL", project);
        },
    },
};
</script>

<style scoped></style>
