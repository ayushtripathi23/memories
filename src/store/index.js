import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    image:
                        "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg",
                    title: "A trip into the Mountains",
                    description: "it was a reallu nice trip",
                },
                {
                    id: "m2",
                    title: "Surfing the sea side",
                    description: "feeling the cool breeze",
                    image:
                        "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg",
                },

                {
                    id: "m3",
                    title: "A trip to the south",
                    description: "feel the real nature ",
                    image:
                        "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg",
                },
            ],
        }
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description

            };
            state.memories.unshift(newMemory)
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData)
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            };
        }
    }
});

export default store;