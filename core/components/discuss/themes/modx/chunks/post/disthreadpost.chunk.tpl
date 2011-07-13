<li class="[[+class]]" id="dis-post-[[+id]]">
    <div class="dis-post">
        <div class="dis-post-author" id="dis-post-author-[[+id]]">

            <div class="dis-author">
                <a href="[[~[[*id]]]]user/?user=[[+author.id]]">[[+author.avatar]]</a>
                	<br />
                	[[+author.username_link]]
                    <br />[[+author.email]]
                    [[+author.group_badge:notempty=`<img class="group-badge" src="[[+author.group_badge]]" alt="" title="[[+author.group_name]]" />`]]
                    [[+author.title:notempty=`<em class="dis-author-title"> - [[+author.title]]</em>`]]
                    <br />
                    [[%discuss.posts]]: <span class="dis-author-post-count">[[+author.posts]]</span>
		            <div class="dis-hidden dis-sig-ct dis-sig-ct-[[+id]]">
		                [[+author.signature:notempty=`<div class="dis-signature">[[+author.signature]]</div>`]]
		            </div>
            </div>
        </div>
    
    
    	<div class="dis-post-content">
        	<h4 class="created">[[+createdon]]</h4>
        	<h1 post="[[+id]]"><a href="[[+url]]">[[+title]]<span class="idx">#[[+idx]]</span></a></h1>
        	<div>[[+content]]</div>
            <div class="dis-actions">[[+actions]]</div>

            <div>[[+report_link]]</div>
                
		    <div class="dis-post-ct" id="dis-thread-ct-[[+id]]">
		
		        <div class="dis-post-footer">
		            <div class="dis-post-attachments">
		            [[+attachments:notempty=`<ul class="dis-attachments">[[+attachments]]</ul>`]]
		            </div>
		            <div class="dis-post-ip">
		                [[+editedby:is=`0`:then=``:else=`<span class="dis-post-editedon">Edited [[+editedon:ago]] by <a href="[[~[[*id]]]]user?user=[[+editedby]]">[[+editedby.username]]</a></span>`]]
		                <a href="[[~[[*id]]]]post/track?ip=[[+ip]]">[[+ip]]</a>
		            </div>
		        </div>
		         	<br class="clearfix" />
		        [[+children:notempty=`<ol class="dis-board-thread [[+children_class]]">[[+children]]</ol>`]]
		    </div>
        </div>



    </div>

</li>
