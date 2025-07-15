export default function form({props}){
    return(
        
<div class="container mt-3">
  <h2>Inline Forms</h2>
  
  
  <p>If you want your form elements to appear side by side, use .row and .col:</p>
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Enter email" name="email"/>
      </div>
      <div class="col">
        <input type="password" class="form-control" placeholder="Enter password" name="pswd"/>
      </div>
    </div>
  </form>
</div>
    )
}