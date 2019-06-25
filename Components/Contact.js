export default `

<div>
<input type="radio" name="aubject" value="personal" id="personal"/>
<label for="personal">Personal Message</label>
<input type="radio" name="subject" value="professional" id="professional"/>
<label for="professional">Professional Message</label>
</div>

<div>
<input type="checkbox" name="opt-in" value="opt-in" checked /> Add me!
<input type="checkbox" name="opt-out" value="opt-out" disabled /> Disabled option
</div>

<div>
<label for="marketing">How did you hear about me?</label>
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

</div>

<div>
<textarea name="user_message" placeholder="Comment please :)" rows="7" cols="10" maslength="500"></textarea>
</div>
<input type="submit" />
</form>

`;