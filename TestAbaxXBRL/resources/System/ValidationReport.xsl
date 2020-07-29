<?xml version="1.0" encoding="UTF-8"?>

<!--
Project: Xbrl Processing Engine
Version: 4

Copyright (c) 2011  EDGAR(r) Online, Inc.

EDGAR(r) is a federally registered trademark of the U.S. Securities and Exchange Commission. EDGAR 
Online is not affiliated with or approved by the U.S. Securities and Exchange Commission.
-->

<xsl:transform version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:strip-space elements="*"/>
	<xsl:output method="html"/>
	<xsl:param name="output" select="'html'"/>
	<xsl:variable name="hex" select="'0123456789ABCDEF'"/>
	<xsl:variable name="ascii"><![CDATA[
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~]]></xsl:variable>
	<xsl:variable name="latin1"><![CDATA[
 ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ+]]></xsl:variable>
	<xsl:template name="decode">
		<xsl:param name="encoded"/>
		<xsl:choose>
			<xsl:when test="contains($encoded,'%')">
				<xsl:value-of select="substring-before($encoded,'%')"/>
				<xsl:variable name="hexpair" select="translate(substring(substring-after($encoded,'%'),1,2),'abcdef','ABCDEF')"/>
				<xsl:variable name="decimal" select="(string-length(substring-before($hex,substring($hexpair,1,1))))*16 + string-length(substring-before($hex,substring($hexpair,2,1)))"/>
				<xsl:choose>
					<xsl:when test="$decimal &lt; 127 and $decimal &gt; 31">
						<xsl:value-of select="substring($ascii,$decimal - 31,1)"/>
					</xsl:when>
					<xsl:when test="$decimal &gt; 159">
						<xsl:value-of select="substring($latin1,$decimal - 159,1)"/>
					</xsl:when>
					<xsl:otherwise>?</xsl:otherwise>
				</xsl:choose>
				<xsl:call-template name="decode">
					<xsl:with-param name="encoded" select="substring(substring-after($encoded,'%'),3)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$encoded"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="/xslt">
		<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
			<head>
				<title>XPE Validation Report</title>
				<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
				<link href="/common/default.css" rel="stylesheet" type="text/css"/>
				<style type="text/css">
/* Table styles. */

table {
  border-color: #000000;
  border-spacing: 0px;
  border-style: solid;
  border-width: 2px;
  cell-spacing: 0px;
}

td, th {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10pt;
  padding: 2px 0.5em;
  white-space: nowrap;
}

td.numeric {
  text-align: right;
}

th {
  background-color: #c0c0c0;
}

th.subHeader {
  background-color: #e0e0e0;
  text-align: left;
}

th.mainHeader {
  background-color: #808080;
  color: #ffffff;
  text-align: left;
}

th a {
  color: #000080;
  text-decoration: none;
}

th a:visited {
  color: #000080;
}

th a:active, th a:hover {
  color: #800000;
  text-decoration: underline;
}

tr.alternateRow {
  background-color: #e0e0e0;
}

td.sortedColumn {
  background-color: #f0f0f0;
}

th.sortedColumn {
  background-color: #b0b0b0;
}

tr.alternateRow td.sortedColumn {
  background-color: #d0d0d0;
}

body { 
	  background-color: white; 
}

a.tab { 
        border-collapse: collapse; 
        border-style: solid solid none solid;  
        border-color: black; 
        border-width: 1px 1px 0px 1px; 
        background-color: silver; 
        padding: 2px 0.5em 0px 0.5em; 
        margin-top: 4px;
        font-family: arial; 
        text-decoration: none;
        width: 13%;
        text-align: center;
      }
      
      a.tab:hover { 
        border-color: black; 
        background-color: white; 
      }
    
      .panel { border: solid 1px black; 
		  background-color: white; 
		  padding: 5px; 
		  overflow: auto;
		}
</style>
				<script type="text/javascript">
					<xsl:text disable-output-escaping="yes"><![CDATA[

 var panels = new Array('namePanel', 'linePanel');
 
 var selectedTab = null;
 function showPanel(tab, name)
 {
        if (selectedTab) 
        {
			  selectedTab.style.backgroundColor = '';
			  selectedTab.style.paddingTop = '';
			  selectedTab.style.paddingBottom = '';
        }
        
        selectedTab = tab;
        selectedTab.style.backgroundColor = 'white';
        selectedTab.style.paddingTop = '6px';
        selectedTab.style.marginTop = '0px';

        for(i = 0; i < panels.length; i++)
        {
          document.getElementById(panels[i]).style.display = (name == panels[i]) ? 'block':'none';
        }

        return false;
}

function sortTable(id, col, rev) {

  // Get the table or table section to sort.
  var tblEl = document.getElementById(id);

  // The first time this function is called for a given table, set up an
  // array of reverse sort flags.
  if (tblEl.reverseSort == null) {
    tblEl.reverseSort = new Array();
    // Also, assume the team name column is initially sorted.
    tblEl.lastColumn = 1;
  }

  // If this column has not been sorted before, set the initial sort direction.
  if (tblEl.reverseSort[col] == null)
    tblEl.reverseSort[col] = rev;

  // If this column was the last one sorted, reverse its sort direction.
  if (col == tblEl.lastColumn)
    tblEl.reverseSort[col] = !tblEl.reverseSort[col];

  // Remember this column as the last one sorted.
  tblEl.lastColumn = col;

  // Set the table display style to "none" - necessary for Netscape 6 
  // browsers.
  var oldDsply = tblEl.style.display;
  tblEl.style.display = "none";

  // Sort the rows based on the content of the specified column using a
  // selection sort.

  var tmpEl;
  var i, j;
  var minVal, minIdx;
  var testVal;
  var cmp;

  for (i = 0; i < tblEl.rows.length - 1; i++) {

    // Assume the current row has the minimum value.
    minIdx = i;
    minVal = getTextValue(tblEl.rows[i].cells[col]);

    // Search the rows that follow the current one for a smaller value.
    for (j = i + 1; j < tblEl.rows.length; j++) {
      testVal = getTextValue(tblEl.rows[j].cells[col]);
      cmp = compareValues(minVal, testVal);
      // Negate the comparison result if the reverse sort flag is set.
      if (tblEl.reverseSort[col])
        cmp = -cmp;
      // Sort by the second column (team name) if those values are equal.
      if (cmp == 0 && col != 1)
        cmp = compareValues(getTextValue(tblEl.rows[minIdx].cells[1]),
                            getTextValue(tblEl.rows[j].cells[1]));
      // If this row has a smaller value than the current minimum, remember its
      // position and update the current minimum value.
      if (cmp > 0) {
        minIdx = j;
        minVal = testVal;
      }
    }

    // By now, we have the row with the smallest value. Remove it from the
    // table and insert it before the current row.
    if (minIdx > i) {
      tmpEl = tblEl.removeChild(tblEl.rows[minIdx]);
      tblEl.insertBefore(tmpEl, tblEl.rows[i]);
    }
  }

  // Make it look pretty.
  makePretty(tblEl, col);

  // Restore the table's display style.
  tblEl.style.display = oldDsply;

  return false;
}

// This code is necessary for browsers that don't reflect the DOM constants
// (like IE).
if (document.ELEMENT_NODE == null) {
  document.ELEMENT_NODE = 1;
  document.TEXT_NODE = 3;
}

function getTextValue(el) {

  var i;
  var s;

  // Find and concatenate the values of all text nodes contained within the
  // element.
  s = "";
  for (i = 0; i < el.childNodes.length; i++)
    if (el.childNodes[i].nodeType == document.TEXT_NODE)
      s += el.childNodes[i].nodeValue;
    else if (el.childNodes[i].nodeType == document.ELEMENT_NODE &&
             el.childNodes[i].tagName == "BR")
      s += " ";
    else
      // Use recursion to get text within sub-elements.
      s += getTextValue(el.childNodes[i]);

  return normalizeString(s);
}

function compareValues(v1, v2) {

  var f1, f2;

  // If the values are numeric, convert them to floats.

  f1 = parseFloat(v1);
  f2 = parseFloat(v2);
  if (!isNaN(f1) && !isNaN(f2)) {
    v1 = f1;
    v2 = f2;
  }

  // Compare the two values.
  if (v1 == v2)
    return 0;
  if (v1 > v2)
    return 1
  return -1;
}

// Regular expressions for normalizing white space.
var whtSpEnds = new RegExp("^\\s*|\\s*$", "g");
var whtSpMult = new RegExp("\\s\\s+", "g");

function normalizeString(s) {

  s = s.replace(whtSpMult, " ");  // Collapse any multiple whites space.
  s = s.replace(whtSpEnds, "");   // Remove leading or trailing white space.

  return s;
}

// Style class names.
var rowClsNm = "alternateRow";
var colClsNm = "sortedColumn";

// Regular expressions for setting class names.
var rowTest = new RegExp(rowClsNm, "gi");
var colTest = new RegExp(colClsNm, "gi");

function makePretty(tblEl, col) {

  var i, j;
  var rowEl, cellEl;

  // Set style classes on each row to alternate their appearance.
  for (i = 0; i < tblEl.rows.length; i++) {
   rowEl = tblEl.rows[i];
   rowEl.className = rowEl.className.replace(rowTest, "");
    if (i % 2 != 0)
      rowEl.className += " " + rowClsNm;
    rowEl.className = normalizeString(rowEl.className);
    // Set style classes on each column (other than the name column) to
    // highlight the one that was sorted.
    for (j = 2; j < tblEl.rows[i].cells.length; j++) {
      cellEl = rowEl.cells[j];
      cellEl.className = cellEl.className.replace(colTest, "");
      if (j == col)
        cellEl.className += " " + colClsNm;
      cellEl.className = normalizeString(cellEl.className);
    }
  }

  // Find the table header and highlight the column that was sorted.
  var el = tblEl.parentNode.tHead;
  rowEl = el.rows[el.rows.length - 1];
  // Set style classes for each column as above.
  for (i = 2; i < rowEl.cells.length; i++) {
    cellEl = rowEl.cells[i];
    cellEl.className = cellEl.className.replace(colTest, "");
    // Highlight the header of the sorted column.
    if (i == col)
      cellEl.className += " " + colClsNm;
      cellEl.className = normalizeString(cellEl.className);
  }
}

function setRanks(tblEl, col, rev) {

  // Determine whether to start at the top row of the table and go down or
  // at the bottom row and work up. This is based on the current sort
  // direction of the column and its reversed flag.

  var i    = 0;
  var incr = 1;
  if (tblEl.reverseSort[col])
    rev = !rev;
  if (rev) {
    incr = -1;
    i = tblEl.rows.length - 1;
  }

  // Now go through each row in that direction and assign it a rank by
  // counting 1, 2, 3...

  var count   = 1;
  var rank    = count;
  var curVal;
  var lastVal = null;

  // Note that this loop is skipped if the table was sorted on the name
  // column.
  while (col > 1 && i >= 0 && i < tblEl.rows.length) {

    // Get the value of the sort column in this row.
    curVal = getTextValue(tblEl.rows[i].cells[col]);

    // On rows after the first, compare the sort value of this row to the
    // previous one. If they differ, update the rank to match the current row
    // count. (If they are the same, this row will get the same rank as the
    // previous one.)
    if (lastVal != null && compareValues(curVal, lastVal) != 0)
        rank = count;
    // Set the rank for this row.
    tblEl.rows[i].rank = rank;

    // Save the sort value of the current row for the next time around and bump
    // the row counter and index.
    lastVal = curVal;
    count++;
    i += incr;
  }

  // Now go through each row (from top to bottom) and display its rank. Note
  // that when two or more rows are tied, the rank is shown on the first of
  // those rows only.

  var rowEl, cellEl;
  var lastRank = 0;

  // Go through the rows from top to bottom.
  for (i = 0; i < tblEl.rows.length; i++) {
    rowEl = tblEl.rows[i];
    cellEl = rowEl.cells[0];
    // Delete anything currently in the rank column.
    while (cellEl.lastChild != null)
      cellEl.removeChild(cellEl.lastChild);
    // If this row's rank is different from the previous one, Insert a new text
    // node with that rank.
    if (col > 1 && rowEl.rank != lastRank) {
      cellEl.appendChild(document.createTextNode(rowEl.rank));
      lastRank = rowEl.rank;
    }
  }
}
]]></xsl:text>
				</script>
			</head>
			<body>
				<!-- Create both views -->
				<div class="panel" id="namePanel" style="display: block">
					<xsl:apply-templates select="/validation/stats"/>
				</div>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="stats">
		<table border="0" cellpadding="0" cellspacing="2">
			<thead>
				<tr>
					<th class="mainHeader" colspan="9">Time spent in each XSL instruction</th>
				</tr>
				<tr>
					<th class="subHeader">Profile type: </th>
					<td colspan="9">XSLT
					</td>
				</tr>
				<tr>
					<th class="subHeader">Report generated on: </th>
					<td colspan="9">
						<xsl:value-of select="@date"/>
					</td>
				</tr>
				<tr>
					<th class="subHeader">Transformer engine: </th>
					<td colspan="9">XBRL Processor
					</td>
				</tr>
				<tr>
					<th class="subHeader">Transformer script: </th>
					<td colspan="9">
						<xsl:value-of select="@xslFile"/>
					</td>
				</tr>
				<tr>
					<th class="subHeader">Initial document: </th>
					<td colspan="9">
						<xsl:value-of select="@xmlFile"/>
					</td>
				</tr>
				<tr>
					<th class="subHeader">Instruction Count</th>
					<td colspan="9">
						<xsl:value-of select="@t-instructions"/> instructions</td>
				</tr>
				<tr>
					<th class="subHeader">Total time elapsed</th>
					<td colspan="9">
						<xsl:value-of select="@t-total"/> milliseconds</td>
				</tr>
				<tr>
					<th style="text-align:left;">
						<a href="" title="Namespace">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 0, false);</xsl:attribute>
							Namespace</a>
					</th>
					<th style="text-align:left;">
						<a href="" title="Name">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 1, false);</xsl:attribute>
							Name
						</a>
					</th>
					<th>
						<a href="" title="Number of calls">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 2, false);</xsl:attribute>
							Calls
						</a>
					</th>
					<th>
						<a href="" title="Time %">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 3, false);</xsl:attribute>
							Time %
						</a>
					</th>
					<th>
						<a href="" title="Average time">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 4, false);</xsl:attribute>
							Average time
						</a>
					</th>
					<th class="sortedColumn">
						<a href="" title="Time">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 5, false);</xsl:attribute>
							Time
						</a>
					</th>
					<th>
						<a href="" title="Tree time %">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 6, false);</xsl:attribute>
							Tree time %
						</a>
					</th>
					<th>
						<a href="" title="Tree average time">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 7, false);</xsl:attribute>
							Tree average time
						</a>
					</th>
					<th>
						<a href="" title="Tree total time">
							<xsl:attribute name="onclick">this.blur(); return sortTable('<xsl:value-of select="@id"/>', 8, false);</xsl:attribute>
							Tree total time
						</a>
					</th>
				</tr>
			</thead>
			<tbody>
				<xsl:attribute name="id"><xsl:value-of select="@id"/></xsl:attribute>
				<xsl:for-each select="fn">
					<tr>
						<xsl:choose>
							<xsl:when test="position() mod 2 = 1">
								<xsl:attribute name="class">alternateRow</xsl:attribute>
							</xsl:when>
							<xsl:otherwise>
								<xsl:attribute name="class"/>
							</xsl:otherwise>
						</xsl:choose>
						<td>
							<xsl:value-of select="@uri"/>
						</td>
						<td>
							<xsl:choose>
								<xsl:when test="@name">
									<xsl:value-of select="@name, @match"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="@type"/>
								</xsl:otherwise>
							</xsl:choose>
						</td>
						<td class="numeric">
							<xsl:value-of select="@count"/>
						</td>
						<td class="numeric">
							<xsl:value-of select="format-number(@t-percent-net, '#0.00')"/>%
						</td>
						<td class="numeric">
							<xsl:value-of select="format-number(@t-avg-net, '#0.000')"/>
						</td>
						<td class="numeric sortedColumn">
							<xsl:value-of select="format-number(@t-sum-net, '#0.000')"/>
						</td>
						<td class="numeric">
							<xsl:value-of select="format-number(@t-percent, '#0.00')"/>%
						</td>
						<td class="numeric">
							<xsl:value-of select="format-number(@t-avg, '#0.000')"/>
						</td>
						<td class="numeric">
							<xsl:value-of select="format-number(@t-sum, '#0.000')"/>
						</td>
					</tr>
				</xsl:for-each>
			</tbody>
		</table>
	</xsl:template>
</xsl:transform>
