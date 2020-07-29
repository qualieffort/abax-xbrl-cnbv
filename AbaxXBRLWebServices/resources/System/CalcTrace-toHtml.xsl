<?xml version="1.0" encoding="utf-8"?>

<!--
Project: Xbrl Processing Engine
Version: 4

Copyright (c) 2011  EDGAR(r) Online, Inc.

EDGAR(r) is a federally registered trademark of the U.S. Securities and Exchange Commission. EDGAR 
Online is not affiliated with or approved by the U.S. Securities and Exchange Commission.
-->

<!-- 
This XSL renders the XML trace generated from the XBRL Processor Calculation Trace report into HTML.

    Integrating applicatins may provide one parameter:
       1) A flag indicating whether conceptNames should be shown or rendered (default-false). (showConceptName) false

-->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
  
  <xsl:param name="showConceptName">false</xsl:param>

  <xsl:decimal-format name="base" decimal-separator="." grouping-separator="," minus-sign="-" />
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head>
        <title>Calculation Trace Report</title>
        <style type="text/css">
    
p, body, center, td, bl li{font-family: Verdana,Helvetica;color: black; font-size: 9;}
th{font-family: Verdana,Helvetica;color: black; font-size: 11;}
a:link{color: black;}a:visited{color: black;}a:active{color: blue;}a:hover{color: blue;}

table.main
{
border: 1px #6699CC solid;
border-collapse: collapse;
border-spacing: 0px;
}

.style2 {
    color: #005983;
    font-family: Arial, Helvetica, sans-serif;
}
    
</style>
      </head>
      <body>
        <tr>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="28%"></td>
              <td width="72%">
                <div align="right" class="style1">
                  <h4 class="style2">Calculation Trace Report</h4>
                </div>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <td>
            <hr size="1" />
          </td>
          <td></td>
        </tr>
        <table border="1" cellpadding="4" cellspacing="0" width="100%" class="main">
          <tbody>
            <tr bgcolor="#e8e8e8">
              <th>Line</th>
              <th>Concept</th>
              <th>Weight</th>
              <th>Balance</th>
              <th>Decimals</th>
              <th>Precision</th>
              <th>Reported</th>
              <th>Calculated</th>
              <th>Source</th>
              <th>Message</th>
            </tr>
            <xsl:for-each select="CalculationTrace/ExtendedLinkRole">
              <tr bgcolor="#0180C4" style="font-weight:bold ">
                <td align="right" width="50" style="color=&quot;#ffffff&quot;">1</td>
                <td colspan="10" style="color=&quot;#ffffff&quot;">Extended Link [
                        <xsl:value-of select="@roleUri" />

                        ]</td>
              </tr>
              <xsl:variable name="contexts" select="./Context" />
              <xsl:for-each select="$contexts">
                <xsl:if test="count(./Unit/Rollup) &gt; 0">
                  <xsl:call-template name="processContext">
                    <xsl:with-param name="context" select="." />
                  </xsl:call-template>
                </xsl:if>
              </xsl:for-each>
              <!--for each contexts-->
              <tr bgcolor="#A0C8F3">
                <td colspan="10">
                  <br />
                </td>
              </tr>
            </xsl:for-each>
            <!--for each extended link role -->
          </tbody>
        </table>
        <tr>
          <td>
            <hr size="1" />
          </td>
        </tr>
        <tr>
          <td colspan="">Copyright (c) 2012    EDGAR(r) Online, Inc.<xsl:value-of select="./@id" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" /></td>
        </tr>
      </body>
    </html>
  </xsl:template>
  <xsl:template name="processContext">
    <xsl:param name="context" />
    <xsl:variable name="units" select="$context/Unit" />
    <tr bgcolor="#A0C8F3" style="font-weight:bold;">
      <td align="right">2</td>
      <td colspan="9">Context 
         <xsl:value-of select="$context/@id" />

         [
         <xsl:value-of select="$context/@instant" /><xsl:value-of select="$context/@from" />

         - 
         <xsl:value-of select="$context/@to" />

         ]  
      		
       
		 </td>
    </tr>
    <tr bgcolor="#A0C8F3" style="font-weight:bold;">
      <td align="right">c-equal</td>
      <td colspan="9">
        <xsl:for-each select="./Context">
          <xsl:if test="@c-equal='true'">
            <xsl:value-of select="@id" />
            <xsl:text> , </xsl:text>
          </xsl:if>
        </xsl:for-each>
      </td>
    </tr>
    <xsl:for-each select="$units">
      <xsl:if test="count(./Rollup) &gt; 0">
        <xsl:call-template name="processUnit">
          <xsl:with-param name="unit" select="." />
        </xsl:call-template>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="processUnit">
    <xsl:param name="unit" />
    <tr bgcolor="#A0C8F3" style="font-weight:bold;">
      <td align="right">3</td>
      <td colspan="9">Unit 
         <xsl:value-of select="./@id" /></td>
    </tr>
    <tr bgcolor="#A0C8F3" style="font-weight:bold;">
      <td align="right">u-equal</td>
      <td colspan="9">
        <xsl:for-each select="./Unit">
          <xsl:if test="@u-equal='true'">
            <xsl:value-of select="@id" />
            <xsl:text> , </xsl:text>
          </xsl:if>
        </xsl:for-each>
      </td>
    </tr>
    <!-- skip any 'from' in the rollup if it existed in the 'to's (dont render it now) -->
    <xsl:for-each select="Rollup">
      <xsl:variable name="ToNamesBool">
        <xsl:call-template name="checkConceptNameEqual">
          <xsl:with-param name="fromName" select="./From/@conceptName" />
          <xsl:with-param name="tonamesunit" select="$unit" />
        </xsl:call-template>
      </xsl:variable>
      <xsl:if test="not(contains($ToNamesBool, 'true'))">
        <xsl:call-template name="processRollup">
          <xsl:with-param name="rollup" select="." />
          <xsl:with-param name="rollupunit" select="$unit" />
          <xsl:with-param name="pad" select="10" />
        </xsl:call-template>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="checkConceptNameEqual">
    <xsl:param name="fromName" />
    <xsl:param name="tonamesunit" />
    <xsl:for-each select="$tonamesunit/Rollup/To">
      <xsl:choose>
        <xsl:when test="@conceptName=$fromName">
          <xsl:value-of select="'true'" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="'false'" />
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="GetToNames">
    <xsl:param name="tonamesunit" />
    <xsl:for-each select="$tonamesunit/Rollup/To">

      <xsl:choose>
        <xsl:when test="@label">
          <xsl:value-of select="@label" />
        </xsl:when>
        <xsl:otherwise>
	      <xsl:value-of select="@conceptName" />
        </xsl:otherwise>
      </xsl:choose>
		
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="processRollup">
    <xsl:param name="rollupWeight" />
    <xsl:param name="rollup" />
    <xsl:param name="rollupunit" />
    <xsl:param name="level" />
    <xsl:param name="pad" />
    <xsl:call-template name="processFromFact">
      <xsl:with-param name="fact" select="$rollup/From" />
      <xsl:with-param name="pad" select="$pad" />
      <xsl:with-param name="rollupWeightFrom" select="$rollupWeight" />
    </xsl:call-template>
    <xsl:variable name="lastFrom" />
    <xsl:for-each select="$rollup/To">
      <xsl:variable name="ToFact" select="." />
      <!-- if any 'to' is in the 'from', render the entire rollup -->
      <xsl:variable name="rollupfrom" select="$rollupunit/Rollup[From/@conceptName = $ToFact/@conceptName]" />
      <xsl:choose>
        <xsl:when test="count($rollupfrom) &gt; 0">
          <xsl:if test="not($ToFact/following-sibling::To/@conceptName=$ToFact/@conceptName)">
            <xsl:for-each select="$rollupfrom">
              <xsl:call-template name="processRollup">
                <xsl:with-param name="rollupWeight" select="$ToFact/@weight" />
                <xsl:with-param name="rollup" select="." />
                <xsl:with-param name="rollupunit" select="$rollupunit" />
                <xsl:with-param name="pad" select="$pad + 10" />
              </xsl:call-template>
            </xsl:for-each>
          </xsl:if>
        </xsl:when>
        <xsl:otherwise>
          <xsl:call-template name="processToFact">
            <xsl:with-param name="fact" select="." />
            <xsl:with-param name="pad" select="$pad + 10" />
          </xsl:call-template>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="processToFact">
    <xsl:param name="fact" />
    <xsl:param name="pad" />
    <tr>
      <td align="right" />
      <td>
        <xsl:attribute name="style">text-indent:
            <xsl:value-of select="$pad" />

            pt</xsl:attribute>

      <xsl:choose>
        <xsl:when test="$showConceptName='false'">
          <xsl:value-of select="$fact/@label" />
        </xsl:when>
        <xsl:otherwise>
	      <xsl:value-of select="$fact/@conceptQName" />
        </xsl:otherwise>
      </xsl:choose>

      </td>
      <td>
        <xsl:choose>
	         <xsl:when test="$fact/@weight">
		        <xsl:value-of select="$fact/@weight" />
        	 </xsl:when>
         	 <xsl:otherwise>
				NA
         	 </xsl:otherwise>
         </xsl:choose>	
      </td>
      <td>
        <xsl:choose>
	         <xsl:when test="$fact/@balance">
		        <xsl:value-of select="$fact/@balance" />
        	 </xsl:when>
         	 <xsl:otherwise>
				NA
         	 </xsl:otherwise>
         </xsl:choose>	
      </td>
      <td>
	  <xsl:choose>
	  	<xsl:when test="$fact/@decimals"><xsl:value-of select="$fact/@decimals" /></xsl:when> 	
		<xsl:otherwise>-</xsl:otherwise>
	  </xsl:choose>
      </td>
      <td>
	  <xsl:choose>
	  	<xsl:when test="$fact/@precision"><xsl:value-of select="$fact/@precision" /></xsl:when> 	
		<xsl:otherwise>-</xsl:otherwise>
	  </xsl:choose>
      </td>
      <td align="right">
		<xsl:choose>
	  		<xsl:when test="$fact/@nilValue">nil</xsl:when> 	
			<xsl:otherwise><xsl:value-of select="$fact/@instance" /></xsl:otherwise>
   	    </xsl:choose>
      </td>
      <td align="right">
		<xsl:choose>
	  		<xsl:when test="$fact/@nilValue">nil</xsl:when> 	
			<xsl:otherwise><xsl:value-of select="$fact/@effective" /></xsl:otherwise>
   	    </xsl:choose>
      </td>
      <td>
       <xsl:choose>
          <xsl:when test="not($fact/@computed='true')">Instance</xsl:when>
          <xsl:otherwise>Computed</xsl:otherwise>
        </xsl:choose>
      </td>
      <td>
        <xsl:choose>
          <xsl:when test="$fact/@message">
               <xsl:value-of select="$fact/@message" />
          </xsl:when>
          <xsl:when test="$fact/@duplicate='True'">Duplicate</xsl:when>
          <xsl:otherwise></xsl:otherwise>
        </xsl:choose>
      </td>
    </tr>
  </xsl:template>
  <xsl:template name="processFromFact">
    <xsl:param name="rollupWeightFrom" />
    <xsl:param name="fact" />
    <xsl:param name="pad" />
    <tr style="font-weight:bold;">
      <xsl:choose>
        <xsl:when test="$fact/@computed = 'true'">
          <xsl:attribute name="bgcolor">#ffffc8</xsl:attribute>
        </xsl:when>
      </xsl:choose>
      <td align="right" />

      <td>
        <xsl:attribute name="style">text-indent:
            <xsl:value-of select="$pad" />

            pt</xsl:attribute>

      <xsl:choose>
        <xsl:when test="$showConceptName='false'">
          <xsl:value-of select="$fact/@label" />
        </xsl:when>
        <xsl:otherwise>
	      <xsl:value-of select="$fact/@conceptQName" />
        </xsl:otherwise>
      </xsl:choose>
      </td>
      <td>
        <xsl:value-of select="$rollupWeightFrom" />
      </td>
      <td>
        <xsl:choose>
	         <xsl:when test="$fact/@balance">
		        <xsl:value-of select="$fact/@balance" />
        	 </xsl:when>
         	 <xsl:otherwise>
				NA
         	 </xsl:otherwise>
         </xsl:choose>	
      </td>
      <td>
	  <xsl:choose>
	  	<xsl:when test="$fact/@decimals"><xsl:value-of select="$fact/@decimals" /></xsl:when> 	
		<xsl:otherwise>-</xsl:otherwise>
	  </xsl:choose>
      </td>
      <td>
	  <xsl:choose>
	  	<xsl:when test="$fact/@precision"><xsl:value-of select="$fact/@precision" /></xsl:when> 	
		<xsl:otherwise>-</xsl:otherwise>
	  </xsl:choose>
      </td>
      <td align="right">
		<xsl:choose>
	  		<xsl:when test="$fact/@nilValue">nil</xsl:when> 	
			<xsl:otherwise>
				<xsl:value-of select="$fact/@instance" />
			</xsl:otherwise>
   	    </xsl:choose>
      </td>
      <td align="right">
		<xsl:choose>
	  		<xsl:when test="$fact/@nilValue">nil</xsl:when> 	
			<xsl:otherwise><xsl:value-of select="$fact/@toSumEffective" /></xsl:otherwise>
   	    </xsl:choose>
      </td>
      <td>
       <xsl:choose>
          <xsl:when test="not($fact/@computed='true')">Instance</xsl:when>
          <xsl:otherwise>Computed</xsl:otherwise>
        </xsl:choose>
      </td>
      <td rowspan="1">
        <xsl:choose>
          <xsl:when test="$fact/@message">
               <xsl:value-of select="$fact/@message" />
          </xsl:when>
          <xsl:when test="$fact/@success = 'False'">
            <xsl:attribute name="bgcolor">#ff6666</xsl:attribute>

               Inconsistency found, calculated value is 
               <xsl:value-of select="$fact/@toSumEffective" />
          </xsl:when>
          <xsl:when test="$fact/@success = 'false'">
            <xsl:attribute name="bgcolor">#ff6666</xsl:attribute>

               Inconsistency found, calculated value is 
               <xsl:value-of select="$fact/@toSumEffective" /></xsl:when>
          <xsl:otherwise>
            <xsl:choose>
              <xsl:when test="$fact/@duplicate='True'">Duplicate</xsl:when>
              <xsl:otherwise>OK</xsl:otherwise>
            </xsl:choose>
          </xsl:otherwise>
        </xsl:choose>
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>

<!--
The contents of this file are subject to the End-User Software License Agreement (the "License"). You may not use this 
file except in compliance with the License. A current copy of the License is available by contacting product support.

Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or 
implied. See the License for the specific language governing rights and limitations under the License.
-->