<template>
<div class="mdc-snackbar">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label"
         role="status"
         aria-live="polite">
      Source Code has finished in 57:28
    </div>
    <div class="mdc-snackbar__actions">
      <button type="button" class="mdc-button mdc-snackbar__action">info</button>
    </div>
  </div>
</div>
</template>

<script>
import { MDCSnackbar } from '@material/snackbar';

export default {
  mounted() {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

    snackbar.open()
  }
}
</script>

<style scoped>

</style>
