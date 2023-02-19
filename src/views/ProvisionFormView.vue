<template>
  <main>
    <h1>Relief Provision Form</h1>
    <form>
      <label class="label" for="organization">Organization Name</label>
      <input type="text" />

      <label class="label" for="resource-type">Resource Type</label>
      <div class="dropdown">
        <select type="option">
          <option value="default">(Select option)</option>
          <option value="water">Water</option>
          <option value="rations">Rations</option>
          <option value="hygiene products">Menstrual Products</option>
        </select>
        <span>-</span>
        <select type="option">
          <option value="default">(Select quantity...)</option>
          <option value="default">1000</option>
          <option value="water">5000</option>
          <option value="rations">10,000</option>
          <option value="hygiene products">Custom supply...</option>
        </select>
      </div>

      <label class="label" for="Description">Description</label>
      <textarea></textarea>

      <button id="btn" role="button">Submit</button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 2em 4em;
}

.label {
  text-align: left;
  margin-top: 2em;
}

input,
button,
select,
textarea,
.dropdown {
  padding: 1em 3em;
  width: 30em;
  border-radius: 8px;
  box-shadow: none;
  border: solid 2px #c0c0c0;
  background: #fdfdfd;
}

button {
  margin-top: 3em;
  padding: 1.5em 2em;
  background: #526589;
  color: white;
  border-style: none;
}
.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

span {
  display: inline-block;
  margin: 0em 4em;
}
</style>
