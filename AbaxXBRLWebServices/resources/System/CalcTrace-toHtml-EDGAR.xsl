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
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:fo="http://www.w3.org/1999/XSL/Format">
  <xsl:param name="showConceptName">false</xsl:param>
  <xsl:decimal-format name="base" decimal-separator="." grouping-separator="," minus-sign="-"/>
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head>
        <title>Calculation Trace Report</title>
        <style type="text/css"> BODY { FONT-FAMILY: Arial, Verdana, Helvetica, Sans-Serif } TD {
          PADDING-RIGHT: 0px; PADDING-LEFT: 0px; FONT-SIZE: 9pt; PADDING-BOTTOM: 0px;
          VERTICAL-ALIGN: top; PADDING-TOP: 0px white-space: nowrap;} TABLE { BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH:
          0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-COLLAPSE: collapse; BORDER-RIGHT-WIDTH: 0px } DIV {
          PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; WHITE-SPACE:
          nowrap } .elementtable { BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid;
          BORDER-LEFT: black 1px solid; WIDTH: 1000px; BORDER-BOTTOM: black 1px solid }
          .calcItemHeaderFooterSpace { HEIGHT: 5px } .divCalcLabel { WHITE-SPACE: normal }
          .topLeveltable { WIDTH: 100% } .mainheader { FONT-WEIGHT: bold; FONT-SIZE: 12pt;
          BACKGROUND-COLOR: #d5eaff } .GrayRowBackground { BACKGROUND-COLOR: #f5f4f3 }
          .firstSummaryColumn { WIDTH: 200px; COLOR: #494949 } .secondSummaryColumn { WIDTH: 150px }
          .firstDetailColumn { FONT-WEIGHT: bold } .secondDetailColumn { WIDTH: 10px } .spaceline {
          HEIGHT: 10pt } .grouptitletd { FONT-WEIGHT: bold; FONT-SIZE: 10pt; BACKGROUND-COLOR:
          #eaeaea } .detailgrouptitletd { FONT-WEIGHT: bold; FONT-SIZE: 10pt; PADDING-TOP: 5pt }
          .fontWarning { COLOR: #ff6600; BACKGROUND-COLOR: #ffffcc } .fontPass { COLOR: green }
          .fontFail { COLOR: red } .fontInformation { COLOR: blue } .elementTableHeader {
          PADDING-RIGHT: 5px; PADDING-LEFT: 5px; BACKGROUND-COLOR: #e9e9e9 } .totalLine {
          BORDER-TOP: black 1px solid; FONT-WEIGHT: bold } .subTotalLine { BORDER-TOP: black 1px
          solid } .spaceCalcItemColumnWidth { WIDTH: 10px } .calcItemHeader { FONT-STYLE: italic;
          BACKGROUND-COLOR: #e9e9e9 } .valueCalcItemHeader { TEXT-ALIGN: center }
          .calcItemHeaderWidth { WIDTH: 150px } .calcItemRow { TEXT-ALIGN: right } .notTopLevelRow {
          FONT-SIZE: 8pt } .operatorColumnWidth { WIDTH: 30px } .operatorColumn { TEXT-ALIGN: center
          } .labelColumnWidth { WIDTH: 500px } .subtotal { FONT-WEIGHT: bold } .totalLineHeight {
          HEIGHT: 5px }</style>
        <style type="text/css"> .print { DISPLAY: block; VISIBILITY: visible } .dontprint { DISPLAY:
          none; VISIBILITY: hidden }</style>
      </head>
      <body>
        <tr>
          <table width="600px" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="28%"/>
              <td width="72%">
                <div align="right" class="style1">
                  <h4 class="style2"> Calculation Validation</h4>
                </div>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <td>
            <hr size="1"/>
          </td>
          <td/>
        </tr>
        <xsl:for-each select="CalculationTrace/ExtendedLinkRole">
          <table>
            <tbody>
              <tr>
                <xsl:choose>
                  <xsl:when test="./Context/Unit/Rollup/From/@consistent='false'">
                    <td class="firstDetailColumn fontFail">
                      <div>Failed</div>
                    </td>
                  </xsl:when>
                  <xsl:otherwise>
                    <td class="firstDetailColumn fontInformation">
                      <div>Info&#160;&#160;&#160;&#160;</div>
                    </td>
                  </xsl:otherwise>
                </xsl:choose>
                <td class="secondDetailColumn">
                  <div>&#160;&#160;&#160;</div>
                </td>
                <td>
                  <div style="WHITE-SPACE: normal">Validate role, <xsl:value-of select="@roleUri"/>
                  </div>
                </td>
              </tr>
              <xsl:for-each select="./Context">
                <xsl:variable name="context" select="."/>
                <xsl:for-each select="./Unit">
                  <xsl:variable name="unit" select="."/>
                  <xsl:if test="count($unit/Rollup) &gt; 0">
                    <tr>
                      <td colSpan="2"/>
                      <td>
                        <xsl:call-template name="processSummaryGroups">
                          <xsl:with-param name="context" select="$context"/>
                          <xsl:with-param name="unit" select="$unit"/>
                        </xsl:call-template>
                      </td>
                    </tr>
                  </xsl:if>
                </xsl:for-each>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:for-each>
        <table>
          <tr>
            <td>
              <hr size="1"/>
            </td>
          </tr>
          <tr>
            <td colspan="">Copyright (c) 2012    EDGAR(r) Online, Inc.<xsl:value-of select="./@id"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"/></td>
          </tr>
        </table>
      </body>
    </html>
  </xsl:template>
  <xsl:template name="processSummaryGroups">
    <xsl:param name="context"/>
    <xsl:param name="unit"/>
    <table>
      <tbody>
        <tr class="calcItemHeaderFooterSpace">
          <td colSpan="5"/>
        </tr>
        <tr>
          <td>
            <table class="elementtable">
              <tbody>
                <tr>
                  <td class="elementTableHeader" colSpan="5"><span style="FONT-STYLE:
                      italic">Period:</span>&#160; <xsl:choose>
                      <xsl:when test="$context/@instant">
                        <xsl:value-of select="$context/@instant"/>
                      </xsl:when>
                      <xsl:otherwise>
                        <xsl:value-of select="$context/@to"/>
                      </xsl:otherwise>
                    </xsl:choose> , &#160;<span style="FONT-STYLE: italic"
                    >Measure:</span>&#160; <xsl:value-of select="$unit/@measure"/>
                    <xsl:if test="$context/Dimensions/Dimension[not(@default)]">
	                    <br /><span style="FONT-STYLE: italic">Dimension:</span>&#160; 
		                <xsl:for-each select="$context/Dimensions/Dimension[not(@default)]">
			                 <xsl:variable name="dimension" select="." />
	                         <xsl:value-of select="$dimension"/>
	                         <xsl:if test="position() != last()"> | </xsl:if>
						</xsl:for-each>			
                    </xsl:if>
                  </td>
                </tr>
                <tr>
                  <td class="calcItemHeader">&#160;</td>
                  <td class="calcItemHeader"/>
                  <td class="calcItemHeader">
                    <div class="valueCalcItemHeader">Reported</div>
                  </td>
                  <td class="calcItemHeader"/>
                  <td class="calcItemHeader">
                    <div class="valueCalcItemHeader">Calculated</div>
                  </td>
                </tr>
                <xsl:for-each select="$unit/Rollup">
                  <xsl:variable name="ToNamesBool">
                    <xsl:call-template name="checkConceptNameEqual">
                      <xsl:with-param name="fromName" select="./From/@conceptName"/>
                      <xsl:with-param name="tonamesunit" select="$unit"/>
                    </xsl:call-template>
                  </xsl:variable>
                  <xsl:if test="not(contains($ToNamesBool, &apos;true&apos;))">
                    <xsl:call-template name="processRollup">
                      <xsl:with-param name="rollupWeight" select="1"/>
                      <xsl:with-param name="rollup" select="."/>
                      <xsl:with-param name="rollupcontext" select="$context"/>
                      <xsl:with-param name="rollupunit" select="$unit"/>
                      <xsl:with-param name="pad" select="10"/>
                    </xsl:call-template>
                  </xsl:if>
                </xsl:for-each>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </xsl:template>
  <xsl:template name="processSummationGroup">
    <xsl:param name="fact"/>
    <xsl:param name="pad"/>
    <tr>
      <td width="800px" class="notTopLevelRow">
        <div class="divCalcLabel" style="PADDING-LEFT: 5px">
          <div class="divCalcLabel">
            <xsl:attribute name="style">text-indent: <xsl:value-of select="$pad"/> pt</xsl:attribute>
                <xsl:value-of select="concat($fact/@conceptQName, '(summation group)')"/>
          </div>
        </div>
      </td>
      <td class="operatorColumn notTopLevelRow"/>
      <td/>
      <td/>
      <td style="PADDING-RIGHT: 5px"/>
    </tr>
  </xsl:template>
  <xsl:template name="processToFact">
    <xsl:param name="fact"/>
    <xsl:param name="pad"/>
    <tr>
      <td class="notTopLevelRow">
        <div class="divCalcLabel" style="PADDING-LEFT: 15px">
          <div class="divCalcLabel">
            <xsl:attribute name="style">text-indent: <xsl:value-of select="$pad"/> pt</xsl:attribute>
             <xsl:value-of select="$fact/@conceptQName"/>
          </div>
        </div>
      </td>
      <td class="operatorColumn notTopLevelRow"> &#160; <xsl:choose>
          <xsl:when test="$fact/@weight &gt;0">+</xsl:when>
          <xsl:otherwise>-</xsl:otherwise>
        </xsl:choose> &#160; </td>
      <td>
        <div class="calcItemRow notTopLevelRow">
          <div>
            <xsl:choose>
              <xsl:when test="$fact/@nilValue">&#160;</xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="format-number($fact/@instance,'#,##0.#########','base')"/>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </div>
      </td>
      <td />
      <td style="PADDING-RIGHT: 5px">
        <div class="calcItemRow notTopLevelRow">
          <div>
            <xsl:choose>
              <xsl:when test="$fact/@nilValue">&#160;</xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="$fact/@effective"/>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </div>
      </td>
    </tr>
  </xsl:template>
  <xsl:template name="processTotal">
    <xsl:param name="fact"/>
    <xsl:param name="pad"/>
    <xsl:param name="rollupWeightFrom"/>
    <tr>
      <td class="notTopLevelRow">
        <div class="divCalcLabel" style="PADDING-LEFT: 5px">
          <div class="divCalcLabel">
            <xsl:attribute name="style">text-indent: <xsl:value-of select="$pad"/> pt</xsl:attribute>
            <xsl:value-of select="$fact/@conceptQName"/>
          </div>
        </div>
      </td>
      <td class="operatorColumn notTopLevelRow"/>
      <td class="totalLine">
        <div>
          <xsl:attribute name="class">
            <xsl:choose>
              <xsl:when test="$fact/@consistent='false'"> calcItemRow notTopLevelRow fontFail </xsl:when>
              <xsl:otherwise> calcItemRow notTopLevelRow </xsl:otherwise>
            </xsl:choose>
          </xsl:attribute>
          <div>
            <xsl:choose>
              <xsl:when test="$fact/@nilValue">&#160;</xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="format-number($fact/@instance,'#,##0.#########','base')"/>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </div>
      </td>
      <td/>
      <td class="totalLine" style="PADDING-RIGHT: 5px">
        <div>
          <div class=" calcItemRow notTopLevelRow">
            <xsl:choose>
              <xsl:when test="$fact/@nilValue">nil</xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="$fact/@toSumEffective"/>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </div>
      </td>
    </tr>
  </xsl:template>
  <xsl:template name="checkConceptNameEqual">
    <xsl:param name="fromName"/>
    <xsl:param name="tonamesunit"/>
    <xsl:for-each select="$tonamesunit/Rollup/To">
      <xsl:choose>
        <xsl:when test="@conceptName=$fromName">
          <xsl:value-of select="&apos;true&apos;"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="&apos;false&apos;"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="GetToNames">
    <xsl:param name="tonamesunit"/>
    <xsl:for-each select="$tonamesunit/Rollup/To">
      <xsl:choose>
        <xsl:when test="@label">
          <xsl:value-of select="@label"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="@conceptName"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="processRollup">
    <xsl:param name="rollupWeight"/>
    <xsl:param name="rollup"/>
    <xsl:param name="rollupcontext"/>
    <xsl:param name="rollupunit"/>
    <xsl:param name="level"/>
    <xsl:param name="pad"/>
    <xsl:call-template name="processSummationGroup">
      <xsl:with-param name="fact" select="$rollup/From"/>
      <xsl:with-param name="pad" select="$pad"/>
    </xsl:call-template>
    <xsl:variable name="lastFrom"/>
    <xsl:for-each select="$rollup/To">
      <xsl:variable name="ToFact" select="."/>
      <!-- if any 'to' is in the 'from', render the entire rollup -->
      <xsl:variable name="rollupfrom" select="$rollupunit/Rollup[From/@conceptName =
        $ToFact/@conceptName]"/>
      <xsl:choose>
        <xsl:when test="count($rollupfrom) &gt; 0">
          <xsl:if test="not($ToFact/following-sibling::To/@conceptName=$ToFact/@conceptName)">
            <xsl:for-each select="$rollupfrom">
              <xsl:call-template name="processRollup">
                <xsl:with-param name="rollupWeight" select="$ToFact/@weight"/>
                <xsl:with-param name="rollup" select="."/>
                <xsl:with-param name="rollupunit" select="$rollupcontext"/>
                <xsl:with-param name="rollupunit" select="$rollupunit"/>
                <xsl:with-param name="level" select="$level + 1"/>
                <xsl:with-param name="pad" select="$pad + 10"/>
              </xsl:call-template>
            </xsl:for-each>
          </xsl:if>
        </xsl:when>
        <xsl:otherwise>
          <xsl:call-template name="processToFact">
            <xsl:with-param name="fact" select="."/>
            <xsl:with-param name="pad" select="$pad + 10"/>
          </xsl:call-template>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
    <xsl:call-template name="processTotal">
      <xsl:with-param name="fact" select="$rollup/From"/>
      <xsl:with-param name="pad" select="$pad"/>
      <xsl:with-param name="rollupWeightFrom" select="$rollupWeight"/>
    </xsl:call-template>
  </xsl:template>
</xsl:stylesheet>
<!--
The contents of this file are subject to the End-User Software License Agreement (the "License"). You may not use this 
file except in compliance with the License. A current copy of the License is available by contacting product support.

Software distributed under the License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or 
implied. See the License for the specific language governing rights and limitations under the License.
-->
