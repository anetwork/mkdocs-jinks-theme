/**
 * @xCode 110110011000011011011000101101011101100010110001001000001101100110000101110110011000011000100000110110001010011111011001100001001101100110000100110110011000011100100000110110011000100000100000110110011000000111011000101010101101100010101101001000001101100110000010110110001011000111011011100011001101100010101000
 * 
 * @name Jinks
 * @desription Jinks theme for MKDocs, supports both *ltr* and *rtl* languages.
 * 
 * @author Reiha Hosseini ( @mrReiha )
 * @version v0.0.1
 * 
 * @since 2015/02
 * @license GPL
 */
 
;!( function( w, d ) {
	
	'use strict';
	
	var parent = function( selector ) {
		
			var items,
				itemsLen,
			
				item = this,
			
				i, len;
			
			if ( !selector )
				return this.parentNode;
			
			items = d.querySelectorAll( selector );
			itemsLen = items.length;
			
			if ( !items || !itemsLen )
				return false;
			
			while ( item ) {
				
				len = itemsLen;
				
				while ( len )
					if ( items[ --len ] == item )
						return item;
					
				item = item.parentNode;
				
			}
			
			return false;
		
		},
		
		name = function() {
			
			return this.nodeName.toLowerCase();
			
		},
		
		scroll = function( e ) {
			
			var scrollTop = d.body.scrollTop || d.documentElement.scrollTop;
			
			if ( scrollTop > headerHeight ) {
				
				!~toc.className.search( /rel/i ) && ( toc.className += ' rel' );
				
				toc.style.top = scrollTop - headerHeight + 'px';
			
			} else {
				
				toc.className = toc.className.replace( /\s?rel/gi, '' );
				
			}
			
		},
	
		codes = d.querySelectorAll( 'code' ),
		codesLen = codes.length,
		
		fns = {
			
			parent: parent,
			name: name
			
		},
		
		item,
		name,
		
		codeClasses = 'ltr ta-left code',
		
		AllowedLMs = [ 'pre' ],
		
		headerHeight = d.querySelector( 'header' ).offsetHeight,
		
		toc = d.querySelector( '.toc' ),
		
		windowHeight = innerHeight ? innerHeight : ( Math.min( d.documentElement.offsetHeight, screen.availHeight ) ),
		tocHeight = toc.offsetHeight,
		
		i, len;
		
	for ( i in fns )
		if ( fns.hasOwnProperty( i ) )
			Element.prototype[ i ] = fns[ i ];
	
	
	/* Start to fix block codes styles */
	/* It doesn't show <pre><code> elements properly */
	len = codesLen;
	
	while ( len ) {
		
		item = codes[ --len ].parent();
		name = item.name();
		
		if ( !~AllowedLMs.indexOf( name ) )
			continue;
		
		if ( item.className )
			item.className += ' ' + codeClasses;
		else
			item.className = codeClasses;
		
	}
	/* Finished */
	
	
	if ( windowHeight > tocHeight ) {
		
		d.addEventListener( 'scroll', scroll, false );
		scroll();
		
	}
	
	// Syntax Highlighter
	hljs.initHighlightingOnLoad();
	
})( this, document );
