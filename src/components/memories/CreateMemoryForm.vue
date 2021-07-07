<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="previewImageUrl" alt="" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
        <!-- <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" /> -->
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea v-model="enteredDescription" rows="5"></ion-textarea>
      </ion-item>
    </ion-list>

    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonLabel,
  IonList,
  IonInput,
  IonItem,
  IonTextarea,
  IonButton,
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
export default {
  emits: ["save-memory"],
  components: {
    IonThumbnail,
    IonLabel,
    IonList,
    IonInput,
    IonItem,
    IonTextarea,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      previewImageUrl: null,
      camera,
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.previewImageUrl = photo.webPath;

      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
    },
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        imageUrl: this.previewImageUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>

<style>
</style>