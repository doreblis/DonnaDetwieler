export default function Content(state){ return `



<form>
 
<br>

<input type="radio" name="subject" value="personal" id="personal"/>
<label for="personal">Personal Message</label>
<input type="radio" name="subject" value="professional" id="professional"/>
<label for="professional">Professional Message</label>
</div>

<div class="form">
  <div class="row">
    <div class="col-25">
      <label for="fname">FIRST NAME</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your first name">
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">LAST NAME</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name">
    </div>

  </div>
  
  
  <div class="row">
    <div class="col-25">
      <label for="subject">MESSAGE</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Please write something" style="height:200px"></textarea>
    </div>
  </div>

</div>



<div>
<label for="marketing">How did you hear about me?</label>
<br>
<select name="marketing">
  <optgroup label="Online">
    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
    <option value="github">Online Portfolio (GitHub)</option>
    <option value="search">Search Engine</option>
    <option value="email">Email</option>
  </optgroup>
  <optgroup label="In-Person">
    <option value="networking">We met at a networking event</option>
    <option value="referral">Personal referral</option>
    <option value="random">We met somewhere else</option>
  </optroup>
  <option value="other">Other</option>
</select>

<br>
<br>

<div>
<input type="checkbox" name="opt-in" value="opt-in" checked /> I want to subscribe for latest updates!
<br>
<input type="checkbox" name="opt-out" value="opt-out" disabled /> I don't want to subscribe to anything.
</div>

<br>
<br>
<input type="submit" />
</form>



`;
}
